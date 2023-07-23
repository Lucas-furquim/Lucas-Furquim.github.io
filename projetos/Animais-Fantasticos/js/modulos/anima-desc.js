export default function desc() {
  const desc = document.querySelectorAll('[data-desc="desc"] section');
  let x = 0;

  desc.forEach((item) => {
    const modulo = x % 2;
    if (modulo != 0) {
      item.setAttribute("data-down", "down");
    } else {
      item.setAttribute("data-right", "right");
    }
    x = x + 1;
  });
}
