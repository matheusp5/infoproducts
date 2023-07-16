import { IconType } from 'react-icons';
import { FaCommentDollar } from 'react-icons/fa';

type BlockParams = {
  title: string;
  content: string;
  icon: any;
};

export default function Block({ block }: { block: BlockParams }) {
  return (
    <div className="rounded bg-slate-900 py-12 w-1/3 mt-14 flex items-center px-14 justify-between">
      <div>
        <h2 className="text-2xl">{block.title}</h2>
        <h1 className="text-3xl font-bold mt-2">{block.content}</h1>
      </div>
      {block.icon}
    </div>
  );
}
