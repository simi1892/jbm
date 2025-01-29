type ProjectProps = {
  title: string;
  href?: string;
  summary: string;
  tech: string;
  github?: string;
  wip?: boolean;
};

export default function Project(props: ProjectProps) {
  return (
    <div
      class={`group rounded-md px-3 py-2 ${
        props.wip
          ? "border-2 border-dashed border-gray-400 dark:border-gray-600"
          : "border border-gray-400 dark:border-gray-600 cursor-pointer"
      } bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-teal-500 dark:hover:from-cyan-500 dark:hover:to-teal-500`}
      onClick={() => props.href && open(props.href, "_blank")}
    >
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-black uppercase group-hover:text-white">
          <a href={props.href} target="_blank" class="hover:underline">
            {props.title}
          </a>
        </h2>
        <div class="text-xs font-bold uppercase px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
          {props.github && (
            <a
              class="hover:underline"
              href={props.github}
              target="_blank"
              onClick={(e) => e.stopPropagation()}
            >
              Github
            </a>
          )}
          {props.wip && <span>WIP</span>}
        </div>
      </div>
      <p class="whitespace-pre-wrap italic font-light text-lg text-gray-700 dark:text-gray-300 group-hover:text-gray-100">
        {props.summary}
      </p>
      <p class="whitespace-pre-wrap text-sm font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-100">
        {props.tech}
      </p>
    </div>
  );
}
