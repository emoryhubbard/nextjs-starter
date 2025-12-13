"use client";

export function ReverseStringButton({ ...props }: React.ComponentProps<"div">) {
  return (
    <div {...props}>
      <button
        className="max-w-d"
        onClick={() => getReverseModal()?.showModal()}
      >
        Reverse string
      </button>
      <dialog id="reverse-modal">
        <article>
          <header>
            <button
              rel="prev"
              onClick={() => getReverseModal()?.close()}
            ></button>
            <h3>Reverse a string</h3>
          </header>
          <label htmlFor="reverse-input">Your string</label>
          <input type="text" id="reverse-input" placeholder="Racecar" />
          <footer>
            <button autoFocus onClick={() => reverse()}>
              Reverse
            </button>
          </footer>
        </article>
      </dialog>
    </div>
  );
}

function getReverseModal() {
  const dialog = document.getElementById("reverse-modal");
  return dialog instanceof HTMLDialogElement ? dialog : null;
}

function reverse() {
  const reverseInput = getReverseInput();
  if (!reverseInput) return;

  reverseInput.value = reverseString(reverseInput.value);
}

function getReverseInput() {
  const input = document.getElementById("reverse-input");
  return input instanceof HTMLInputElement ? input : null;
}

function reverseString(s: string) {
  const letters = Array(...s);
  let reverse = "";
  letters.forEach((l) => {
    reverse = l + reverse;
  });
  return reverse;
}
