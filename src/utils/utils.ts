import { Article, DataChart } from "./types";
import moment from "moment";
export const handleError = (error: any) => {
  if (error && error.response)
    switch (error.response.status) {
      case 429:
        return {
          number: 429,
          message: "You have made too many requests recently",
        };
      case 500:
        return {
          number: 500,
          message: "Something went wrong on API server side",
        };
      case 400:
        return { number: 400, message: "Please enter query search or source" };
      case 426:
        return {
          number: 400,
          message: "You are trying to request results too far in the past",
        };
      default:
        return {
          number: error.response.status,
          message: "Something went wrong please try again",
        };
    }
  else
    return {
      number: 56,
      message: "Something went wrong please try again",
    };
};
export const convertDateFromUrl = (propsDate: string) => {
  const date = new Date(propsDate);
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const newDate = date.toDateString();
  const arr = newDate.split(" ");
  arr[0] = day;
  arr[2] = arr[2] + ",";
  return arr.join(" ");
};
export const convertDateFromUi = (date: string | null) => {
  if (date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  } else {
    return;
  }
};

export const convertDateToDatePicker = (inputDate: string) => {
  var date = new Date(inputDate);
  if (!isNaN(date.getTime())) {
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  }
};

export const renderTags = (tags: string[], isMobileDevice: boolean) => {
  const newTagsArr: string[] = [];
  if (isMobileDevice && tags) {
    newTagsArr.push(tags[0]);
  } else if (tags) {
    tags.slice(0, 2).map((tag) => {
      return newTagsArr.push(tag);
    });
  }
  const MAX_TAGS_TABLET = 2;
  const MAX_TAGS_MOBILE = 1;

  if (tags.length > 1 && isMobileDevice) {
    const amount = tags.length - MAX_TAGS_MOBILE;
    newTagsArr.push(`+${amount}`);
  } else if (tags.length > MAX_TAGS_TABLET && !isMobileDevice) {
    const amount = tags.length - MAX_TAGS_TABLET;
    newTagsArr.push(`+${amount}`);
  }
  return newTagsArr;
};
export const isNotEmpty = (value: string) => {
  return value.trim() !== "";
};

export const calculateSourcesChart = (articles: Article[]) => {
  let sourcesChart: DataChart[] = [];
  articles.forEach((article) => {
    const index = sourcesChart.findIndex(
      ({ name }) => name === article.source.name
    );
    if (index !== -1) {
      sourcesChart[index].value++;
    } else {
      sourcesChart.push({ name: article.source.name, value: 1 });
    }
  });
  sourcesChart.forEach((source) => {
    source.name = source.name.split(".")[0];
    source.value = Math.round((source.value * 100) / articles.length);
  });
  sourcesChart.sort((a, b) => {
    return b.value - a.value;
  });
  if (sourcesChart.length > 5) {
    let sumOfother = 0;
    for (let i = 4; i < sourcesChart.length; i++) {
      sumOfother = sumOfother + sourcesChart[i].value;
    }
    const newArray = sourcesChart.slice(0, 4);
    newArray.push({ name: "Other", value: sumOfother });
    return { array: newArray, numberOfArticles: sourcesChart.length };
  }
  return { array: sourcesChart, numberOfArticles: sourcesChart.length };
};
export const calculateDatesChart = (articles: Article[]) => {
  let isEmpty = true; 
  const datesChart: { name: string; amount: number , date: string}[] = [];
  const sortedArray = articles.sort((a,b) => new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf());
  sortedArray.forEach((article) => {
    let value = moment.utc(article.publishedAt).format("DD/MM");  
    const index = datesChart.findIndex(({ name }) => value === name);
      if (index !== -1) {
        datesChart[index].amount++;
      } else {
        datesChart.push({ name: value, amount: 1 , date: article.publishedAt});
      }
  });
  if(datesChart.length === 1){
    datesChart.push({name:"",amount:0,date:""})
    datesChart.unshift({name:"",amount:0,date:""})
  } 
 
  datesChart.forEach((day) => {
    if (day.amount > 0) {
      isEmpty = false;
    }
  });
  return isEmpty ? [] : datesChart;
};

export const isRTL = (s: string) => {
  var ltrChars =
      "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" +
      "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF",
    rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    rtlDirCheck = new RegExp("^[^" + ltrChars + "]*[" + rtlChars + "]");

  return rtlDirCheck.test(s);
};

export const calculateTagsChart = (articles: Article[]) => {
  const tagsChart: DataChart[] = [];
  articles.forEach((article) => {
    article.tags?.forEach((tag) => {
      const index = tagsChart.findIndex(({ name }) => name === tag);
      if (index !== -1) {
        tagsChart[index].value++;
      } else {
        tagsChart.push({ name: tag, value: 1 });
      }
    });
  });
  tagsChart.forEach((month) => {
    month.value = (month.value * 100) / articles.length;
  });
  return tagsChart;
};
