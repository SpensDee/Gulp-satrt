function tellMask() {
  const INPUTS_TELL = document.querySelectorAll("input[name='tell']");
  const INPUT_MASK = new Inputmask("+38 (999) 999-99-99");

  INPUTS_TELL.forEach((input) => INPUT_MASK.mask(input));
}

export default tellMask;
