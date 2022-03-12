const Loadingpulse = ({ body }) => {
  return (
    <div class="animate-pulse h-full w-full flex space-x-4">
      <div class="rounded-full flex justify-center items-center text-lg text-white font-bold bg-slate-700 h-full w-full">
        <h1>{body}</h1>
      </div>
    </div>
  );
};

export default Loadingpulse;
