import { Article, DataChart } from "./types";

export const handleError = (error: any) => {
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

// export const checkLengthDescription = (title: string) => {
//   var trimmedString = title.slice(0, 200);
//   trimmedString = trimmedString.slice(
//     0,
//     Math.min(trimmedString.length, trimmedString.lastIndexOf(" "))
//   );
//   return trimmedString;
// };

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
  const sourcesChart: DataChart[] = [];
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
  return sourcesChart;
};
export const calculateDatesChart = (articles: Article[]) => {
  let isEmpty = true;
  const datesChart: { name: string; value: number }[] = [
    { name: "SUN", value: 0 },
    { name: "MON", value: 0 },
    { name: "TUE", value: 0 },
    { name: "WED", value: 0 },
    { name: "THU", value: 0 },
    { name: "FRI", value: 0 },
    { name: "SAT", value: 0 },
  ];
  articles.forEach((article) => {
    const day = convertDateFromUrl(article.publishedAt)
      .split(" ")[0]
      .toUpperCase()
      .slice(0, 3);
    const index = datesChart.findIndex(({ name }) => name === day);
    if (index !== -1) {
      datesChart[index].value++;
    } else {
      datesChart.push({ name: day, value: 1 });
    }
  });
  datesChart.forEach((day) => {
    if (day.value > 0) {
      isEmpty = false;
    }
    day.value = (day.value * 100) / articles.length;
  });
  return isEmpty ? [] : datesChart;
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
