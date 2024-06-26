import pandas as pd
import numpy as np

data_build = r'/home/crossovka/code/hakaton/second/my-app/data/Входной пакет_1 тест/Данные по застройщикам.xlsx'
norma = r'/home/crossovka/code/hakaton/second/my-app/data/Входной пакет_1 тест/Нормативы.xlsx'
car_med_org = r'/home/crossovka/code/hakaton/second/my-app/data/Входной пакет_1 тест/Карточка мед.организации.xlsx'

# Шаг 1: Загрузка данных
data_builders = pd.read_excel(data_build, sheet_name='ЖК')
normatives = pd.read_excel(norma, sheet_name='Нормативы')
mo_list = pd.read_excel(car_med_org, sheet_name='Список МО')
staff_list = pd.read_excel(car_med_org, sheet_name='Штатное расписание')

# Заполнение пропущенных значений нулями
data_builders = data_builders.fillna(0)
mo_list = mo_list.fillna(0)
staff_list = staff_list.fillna(0)

# Шаг 2: Анализ нагрузки на врачебные кадры
def calculate_load(mo_list, staff_list):
    mo_list['Общая численность прикрепленного населения'] = mo_list[
        'Общая численность прикрепленного населения'].fillna(0)
    load_data = pd.merge(mo_list, staff_list,
                         left_on=['Наименование медицинской организации', 'Наименование филиала', 'Адрес филиала'],
                         right_on=['Название медицинской организации', 'Наименование филиала', 'Адрес филиала'])
    load_data['Нагрузка'] = load_data['Общая численность прикрепленного населения'] / load_data[
        'Количество штатных единиц'].replace(0, 1)
    return load_data


load_data = calculate_load(mo_list, staff_list)


# Шаг 3: Определение дефицита/профицита
def calculate_deficit(load_data, normatives):
    # Фильтруем нормативы по различным единицам измерения
    units_of_measurement = [
        'Взрослого население (чел.)',
    ]
    normatives = normatives[normatives['Единица измерения'].isin(units_of_measurement)]

    merged_data = pd.merge(load_data, normatives, left_on='Наименование должностей', right_on='Наименование должностей',
                           how='left')
    merged_data['Рекомендуемое количество'] = merged_data['Общая численность прикрепленного населения'] // (
                merged_data['Условие'] * merged_data['Рекомендуемые штатные нормативы (количество должностей)'])

    # Рассчитываем дефицит/профицит
    merged_data['Дефицит/Профицит'] = merged_data['Рекомендуемое количество'] - merged_data['Количество штатных единиц']

    # Статус
    merged_data['Статус'] = np.select(
        [merged_data['Количество штатных единиц'] < merged_data['Рекомендуемое количество'],
         merged_data['Количество штатных единиц'] > merged_data['Рекомендуемое количество']],
        ['Дефицит', 'Профицит'], default='Достаток')

    return merged_data


deficit_data = calculate_deficit(load_data, normatives)
position = deficit_data['Наименование должностей']
statuses = deficit_data['Статус']

# Создание словаря для хранения данных о врачах по каждой поликлинике
polyclinic_data = {}
polyclinics = deficit_data['Название медицинской организации'].unique()

for polyclinic in polyclinics:
    polyclinic_data[polyclinic] = deficit_data[deficit_data['Название медицинской организации'] == polyclinic]

# Шаг 5: Сохранение данных в новый Excel файл
output_file = r'C:\Users\Пользователь\PycharmProjects\pythonProject\output_analysis.xlsx'
with pd.ExcelWriter(output_file, engine='openpyxl') as writer:
    deficit_data.to_excel(writer, sheet_name='Дефицит_Профицит', index=False)

print(f"Данные успешно сохранены в файл {output_file}")

# Вывод информации о врачах по каждой поликлинике
for polyclinic, data in polyclinic_data.items():
    print(f"\nПоликлиника: {polyclinic}")
    print(data[['Наименование должностей', 'Статус']].to_string(index=False))