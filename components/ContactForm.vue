<template>
  <form
    id="contact-me"
    name="contact"
    method="POST"
    data-netlify="true"
    netlify-honeypot="bot-catcher"
  >
    <fieldset class="grid grid-cols-2 grid-rows-3 gap-2 xl:gap-4">
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label> Are we human, or are we spammer?: <input name="bot-catcher" /> </label>
      </p>
      <div data-field="first name" class="">
        <label class="visually-hidden" for="contact-first-name">First Name</label>
        <input
          id="contact-first-name"
          name="first-name"
          class="input"
          placeholder=" "
          required
          autocomplete="given-name"
        />
      </div>
      <div data-field="last name" class="">
        <label class="visually-hidden" for="contact-last-name">Last Name</label>
        <input
          id="contact-last-name"
          name="last-name"
          class="input peer"
          placeholder=" "
          required
          autocomplete="family-name"
        />
        <Icon
          name="mdi:account"
          class="w-6 absolute right-2 text-near-black peer-focus:opacity-0 peer-focus:translate-x-full transition-all"
        />
      </div>
      <div data-field="email" class="col-span-2">
        <label class="visually-hidden" for="contact-email">E-mail</label>
        <input
          id="contact-email"
          name="email"
          class="input peer"
          placeholder=" "
          required
          autocomplete="email"
        />
        <Icon
          name="mdi:email"
          class="w-6 absolute right-2 text-near-black peer-focus:opacity-0 peer-focus:translate-x-full transition-all"
        />
      </div>
      <div data-field="message" class="translate-y-1/2 col-span-2">
        <label class="visually-hidden" for="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          class="input peer"
          placeholder=" "
        ></textarea>
        <Icon
          name="mdi:message"
          class="w-6 absolute right-2 text-near-black peer-focus:opacity-0 peer-focus:translate-x-full transition-all"
        />
      </div>
    </fieldset>
    <button
      type="submit"
      class="group shadow-lg my-12 mx-auto w-1/2 min-w-[200px] rounded-xl px-4 py-2 bg-blue-950 border bg-opacity-90 text-white hover:bg-near-white hover:text-black hover:border-blue-950"
    >
      Send
      <Icon
        name="mdi:send"
        class="w-6 h-max pb-1 transition-transform group-hover:translate-x-1 group-hover:scale-105"
      />
    </button>
  </form>
</template>

<style scoped lang="postcss">
form {
  --bg-color: #eee;
  --txt-color: #333;
  --input-color: rgb(23 37 84);
  --border-w: 0.1rem;
  width: 90%;
  max-width: 600px;
  color: var(--txt-color);
  display: flex;
  flex-direction: column;
  @apply bg-gradient-to-b from-[#EEEEEE95] to-near-white p-4 sm:p-12 shadow-md rounded-xl;
}

button {
  font-weight: bold;
  letter-spacing: 0.05rem;
}

fieldset > div {
  margin: 1rem auto;
  background: inherit;
  position: relative;
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
}

.input {
  outline: none;
  max-width: 100%;
  border: 1px solid var(--input-color);
  border-radius: 0.75rem;
  background: var(--bg-color);
  color: inherit;
  padding: 0.5rem;
  flex-grow: 1;
}

.input:focus {
  border-color: var(--input-color);
  transition-delay: 100ms;
}

div::after {
  position: absolute;
  display: block;
  content: attr(data-field);
  width: max-content;
  height: max-content;
  padding: 0.5rem 0;
  left: 0.5rem;
  top: 50%;
  translate: 0 -50%;
  text-transform: uppercase;
  transform-origin: left center;
  opacity: 0;
  pointer-events: none;
  font-size: smaller;
}

div:has(.input:placeholder-shown)::after {
  transition: transform 100ms, opacity 500ms 100ms;
  opacity: 0.4;
}

div:has(.input:focus)::after {
  transform: translate(0, -125%) scale(0.6);
  padding: 0 0.5rem;
  background: transparent;
  color: var(--txt-color);
  opacity: 1;
  letter-spacing: 0.05rem;
  font-size: medium;
}

div:has(textarea.input:focus)::after {
  transform: translate(0, -175%) scale(0.6);
}
</style>
