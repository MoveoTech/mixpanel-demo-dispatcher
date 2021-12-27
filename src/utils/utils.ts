
export const convertDate = (propsDate : string) => {
    const date = new Date(propsDate);
    const day = date.toLocaleString("en-US", { "weekday": "long" });
    const newDate = date.toDateString();
    const arr = newDate.split(" ");
    arr[0] = day;
    arr[2]=arr[2]+',';
    return (arr.join(' '))
}
export const renderTags = (tags: string[]) => {
  const newTagsArr = [];
  tags.slice(0,2).map((tag) => {
    newTagsArr.push(tag);
  })
  if(tags.length > 2){
    const amount = tags.length - 2;
    newTagsArr.push(`+${amount}`);
  }
  return newTagsArr;
}