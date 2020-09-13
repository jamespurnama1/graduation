export default {
  mounted() {
    if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
      const grid = document.querySelectorAll('.grid');
      for (let i = 0; i < grid.length; i++) { // eslint-disable-line
        grid[i].classList.add('safariFix');
      }
      console.log('safari Hotfix');
      grid.classList.add('safariFix');
    }
  },
};
