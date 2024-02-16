import React from 'react';
import { useTranslation } from 'react-i18next';//1

const Language = () => {
  const { t, i18n } = useTranslation();//2

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = () => {

    const selectedLanguage = document.getElementById('gender').value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div>
      <h2 className='py-3 fs-2 fontfamily' style={{ color: "#dc0b62" }}>{t('Language')}</h2>
      <div className='mt-5 d-flex flex-column align-items-center gap-2 fontfamily'>
        <h6 className='fs-5 fontfamily' style={{ color: "#dc0b62" }}>{t('choose')}</h6>
        <div className='details p-5'>
          <select id="gender" className="input-signup curser-pointer my-2">
            <option value="ar" className="male fontfamily">{t('arabic')}</option>
            <option value="en" className="male fontfamily">{t('english')}</option>
          </select>
          <button className='btn w-100 mt-5 fontfamily' style={{ background: "#dc0b62", color: "var(--text)" }} onClick={handleLanguageChange}>{t('change')}</button>
        </div>
      </div>
    </div>
  );
}

export default Language;
