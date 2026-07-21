import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, FileText } from 'lucide-react';

interface MarketItem {
  id: string;
  title: string;
  date: string;
}

interface ViewMarketCommentaryProps {
  commentaries: MarketItem[];
  onClose?: () => void;
}

export default function ViewMarketCommentary({ commentaries, onClose }: ViewMarketCommentaryProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-[#F4F4F4] w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        <div className="p-5 bg-white border-b border-slate-200 flex items-center gap-4">
          <button 
            onClick={onClose ? onClose : () => navigate(-1)} 
            className="p-1.5 rounded-xl hover:bg-slate-100 transition cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-slate-700" />
            <h2 className="text-xl font-bold text-slate-900">View Market Commentary</h2>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-3 flex-1">
          {commentaries.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                if (onClose) onClose();
                navigate(`/invest/subpages/commentary-details?id=${item.id}`);
              }}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 shadow-xs transition cursor-pointer flex items-center justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{item.date}</p>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}