
//Function to scroll the window to top when window is filled with search results
export const scrollToTop = () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
}