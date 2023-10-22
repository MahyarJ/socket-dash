type Props = {
  title: string;
  value: string;
};

const Box = (props: Props) => (
  <div className="z-10 max-w-5xl w-full mb-2 items-center justify-between font-mono text-sm lg:flex">
    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
      {props.title}&nbsp;
      <code className="font-mono font-bold">{props.value}</code>
    </p>
  </div>
);

export default Box;
