export const useCustomNavigate = (sectionId) => {
  const sectionDiv = document.querySelector("#" + sectionId);
  if (!sectionDiv) return;
  sectionDiv.scrollIntoView({ behavior: "smooth" });
};
