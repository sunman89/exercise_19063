export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  let formattedDate = new Date(dateToFormatTimeMillis);
  let systemDate = new Date(systemDateTimeMillis);

  function dateFormatted()
  {
      return formattedDate.getDate() + '/' + monthFormatted() + '/' + formattedDate.getFullYear();
  }

  function monthFormatted()
  {
    if(formattedDate.getMonth()+1 < 10)
    {
      return '0' + (formattedDate.getMonth()+1);
    }
    else
    {
      return formattedDate.getMonth()+1;
    }
  }

  if(formattedDate.getFullYear() == systemDate.getFullYear())
  {
      if(formattedDate.getMonth() == systemDate.getMonth())
      {
          if(formattedDate.getDay() == systemDate.getDay())
          {
            return 'TODAY';
          }
      }
  }
  return dateFormatted();

};
