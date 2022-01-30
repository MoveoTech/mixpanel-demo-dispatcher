import { Article, DataChart } from "./types";

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
    source.value = (source.value * 100) / articles.length;
  });
  return sourcesChart;
};
export const calculateDatesChart = (articles: Article[]) => {
  const datesChart: DataChart[] = [];
  articles.forEach((article) => {
    const month = convertDateFromUrl(article.publishedAt)
      .split(" ")[1]
      .toUpperCase();
    const index = datesChart.findIndex(({ name }) => name === month);
    if (index !== -1) {
      datesChart[index].value++;
    } else {
      datesChart.push({ name: month, value: 1 });
    }
  });
  datesChart.forEach((month) => {
    month.value = (month.value * 100) / articles.length;
  });
  return datesChart;
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
