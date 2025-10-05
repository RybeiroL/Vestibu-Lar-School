
import type { Subject } from './types';
import { 
  BookOpenIcon, 
  BeakerIcon, 
  GlobeAltIcon, 
  CalculatorIcon,
  UsersIcon,
  LightBulbIcon,
  AcademicCapIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  PaintBrushIcon,
  ChatBubbleLeftRightIcon
} from './components/icons';

export const SUBJECTS: Subject[] = [
  {
    id: 'portugues',
    name: 'Português',
    icon: BookOpenIcon,
    color: 'text-orange-400',
    bgColor: 'bg-orange-900/50',
  },
  {
    id: 'matematica',
    name: 'Matemática',
    icon: CalculatorIcon,
    color: 'text-red-400',
    bgColor: 'bg-red-900/50',
  },
  {
    id: 'historia',
    name: 'História',
    icon: BookOpenIcon,
    color: 'text-purple-400',
    bgColor: 'bg-purple-900/50',
  },
  {
    id: 'geografia',
    name: 'Geografia',
    icon: GlobeAltIcon,
    color: 'text-green-400',
    bgColor: 'bg-green-900/50',
  },
  {
    id: 'quimica',
    name: 'Química',
    icon: BeakerIcon,
    color: 'text-blue-400',
    bgColor: 'bg-blue-900/50',
  },
  {
    id: 'fisica',
    name: 'Física',
    icon: BeakerIcon,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-900/50',
  },
  {
    id: 'biologia',
    name: 'Biologia',
    icon: AcademicCapIcon,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-900/50',
  },
  {
    id: 'filosofia',
    name: 'Filosofia',
    icon: LightBulbIcon,
    color: 'text-indigo-400',
    bgColor: 'bg-indigo-900/50',
  },
  {
    id: 'sociologia',
    name: 'Sociologia',
    icon: UsersIcon,
    color: 'text-teal-400',
    bgColor: 'bg-teal-900/50',
  },
  {
    id: 'ingles',
    name: 'Inglês',
    icon: ChatBubbleOvalLeftEllipsisIcon,
    color: 'text-sky-400',
    bgColor: 'bg-sky-900/50',
  },
  {
    id: 'espanhol',
    name: 'Espanhol',
    icon: ChatBubbleLeftRightIcon,
    color: 'text-amber-400',
    bgColor: 'bg-amber-900/50',
  },
  {
    id: 'artes',
    name: 'Artes',
    icon: PaintBrushIcon,
    color: 'text-rose-400',
    bgColor: 'bg-rose-900/50',
  },
];
