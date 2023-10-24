// Function to uwuify text
function uwuify(text) {
  text = text.replace(/l/g, 'w');
  text = text.replace(/r/g, 'w');
  text = text.replace(/L/g, 'W');
  text = text.replace(/R/g, 'W');
  return text;
}

document.addEventListener('keydown', (event) => {
  const target = event.target;

  // Check if the event occurred in an input or textarea element
  if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
    const cursorPosition = target.selectionStart;
    const textBeforeCursor = target.value.slice(0, cursorPosition);
    const textAfterCursor = target.value.slice(cursorPosition);
    const uwuifiedText = uwuify(textBeforeCursor) + textAfterCursor;
    target.value = uwuifiedText;

    // Manually trigger the input event to reflect the change
    const inputEvent = new Event('input', { bubbles: true, cancelable: true });
    target.dispatchEvent(inputEvent);
  }
});
