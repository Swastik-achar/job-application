export const findApplicationByCategory = (applications, category) => {
  return applications.filter(application => {
    return application.jobTitle == category;
  });
};
