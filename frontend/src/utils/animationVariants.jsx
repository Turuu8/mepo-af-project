export const formAnimation = {
  hidden: { opacity: 0.5, scale: 0.6 },
  visible: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};
export const navbarDropdownAnimation = {
  hidden: { y: "-100%" },
  visible: { y: 0, transition: { duration: 0.8, type: "spring" } },
  exit: { y: "-100%", transition: { duration: 0.8, type: "spring" } },
};
