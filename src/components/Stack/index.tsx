import Technology from "./Technology";

import { ACTUAL_STACK } from "./constants";

function Stack() {
  return (
    <article id="stack" className="flex flex-col text-white">
      <h2 className="self-center text-3xl mb-32 underline underline-offset-4 decoration-sky-500">
        Стек
      </h2>

      <ul className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-20 gap-y-20 text-white mb-100">
        {Object.entries(ACTUAL_STACK).map(([key, { SVG, text, link }]) => (
          <Technology
            key={`technology_${key}`}
            SVG={SVG}
            title={key}
            text={text}
            link={link}
          />
        ))}
      </ul>
    </article>
  );
}

export default Stack;
