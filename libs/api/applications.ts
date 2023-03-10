import { fetcher } from "../../utils/address";

export const getApplications = async (formData: any) => {
  const api_url = `/api/applications/find-by-address`;
  try {
    const res = await fetch(api_url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const { applications } = await res.json();
    return applications;
  } catch (error) {
    console.log(error, " is error getting applications");
    return [];
  }
};

export const getApplicationById = async (id: any) => {
  try {
    const { application } = await fetcher(`/api/applications/${id}`, {});
    return application;
  } catch (error) {}
};

export const deleteApplication = async (id: any) => {
  let deletedApp = null;
  const api_url = `/api/applications/${id}/delete`;
  try {
    const { projects } = await fetch(api_url, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return projects;
  } catch (error) {}
  return deletedApp;
};

export const createNewApplication = async (formData: any) => {
  try {
    const { application } = await fetch("/api/applications/create", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return application;
  } catch (error) {
    console.log(error, " is error");
    return null;
  }
};
export const updateApplication = async (id: string, formData: any) => {
  try {
    const { application } = await fetch(`/api/applications/${id}/update`, {
      method: "PATCH",
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((res) => res.json());
    return application;
  } catch (error) {
    console.log(error, " is error");
    return null;
  }
};
