// Files.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './files.modules.scss'
import '../../scss/null.scss';

function Files() {
  
	const [dataBuild, setDataBuild] = useState(null);
  const [norma, setNorma] = useState(null);
  const [carMedOrg, setCarMedOrg] = useState(null);

  const handleFileChange = (event, setFileState) => {
    const file = event.target.files[0];
    setFileState(file);
  };

  const uploadFiles = () => {
    // Here you can handle the file upload process or pass the file objects to other components
    console.log(dataBuild, norma, carMedOrg);
  };

  return (
    <div className="wrapper">
      <main>
				<input className='file' type="file" onChange={(e) => handleFileChange(e, setDataBuild)} />
				<input className='file' type="file" onChange={(e) => handleFileChange(e, setNorma)} />
				<input className='file' type="file" onChange={(e) => handleFileChange(e, setCarMedOrg)} />
				<button className='file-upload' onClick={uploadFiles}>Загрузить файлы</button>
      </main>
    </div>
  );
};

export default Files;