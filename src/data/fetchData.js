import * as myConstant from "../constant";
import jobs from "./jobs.json";

const getAllJobs = async (page, searchParam = null) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  if (searchParam) {
    let searchValue = searchParam.toLowerCase();
    let filteredData = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchValue) ||
        job.description.toLowerCase().includes(searchValue) ||
        job.city.toLowerCase().includes(searchValue) ||
        job.skills.some((skill) => skill.toLowerCase().includes(searchValue))
    );

    return { jobs: filteredData, pagesTotalNum: 1 };
  } else {
    const start = (page - 1) * myConstant.JOB_PER_PAGE;
    const end = start + myConstant.JOB_PER_PAGE;
    const maxPageNumber = Math.ceil(jobs.length / myConstant.JOB_PER_PAGE);
    return { jobs: jobs.slice(start, end), pagesTotalNum: maxPageNumber };
  }
};

const getSingleJobById = async (id) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 100);
  });

  await promise;

  return jobs.find((job) => job.id === id);
};

export default { getAllJobs, getSingleJobById };
