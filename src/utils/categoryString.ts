export const categoryString = (category: string) => {
  const categoryObj: { [key: string]: string } = {
    college: 'College',
    highschool: 'Highschool',
    kid: 'For Kids',
  };
  return categoryObj[category];
};
