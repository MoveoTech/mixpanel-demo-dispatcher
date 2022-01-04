export const convertDate = (propsDate: string) => {
  const date = new Date(propsDate);
  const day = date.toLocaleString("en-US", { weekday: "long" });
  const newDate = date.toDateString();
  const arr = newDate.split(" ");
  arr[0] = day;
  arr[2] = arr[2] + ",";
  return arr.join(" ");
};
export const renderTags = (tags: string[], isMobileDevice: boolean) => {
  const newTagsArr: string[] = [];
  if (isMobileDevice && tags) {
    newTagsArr.push(tags[0]);
  } else if (tags) {
    tags.slice(0, 2).map((tag) => {
      newTagsArr.push(tag);
    });
    console.log(newTagsArr);
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
