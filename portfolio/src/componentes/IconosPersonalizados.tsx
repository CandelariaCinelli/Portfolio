import React from 'react';
import {
  Layers,
  ShieldCheck,
  Sparkles,
  Compass,
  Coffee,
  Server,
  Lock,
  Database,
  CheckCircle2,
  Atom,
  FileCode2,
  Cpu,
  Layout,
  TableProperties,
  GitBranch,
  Box,
  Send,
  Cloud,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Check,
  Copy,
  ChevronRight,
  Terminal,
  Play,
  ShoppingCart,
  Users,
  Vote,
  Sparkle,
  FileText,
  Menu,
  X,
  Printer,
  Plus,
  Minus,
  Trash2,
  Heart,
  Filter,
  GraduationCap,
  Globe2,
  BookOpen,
  TrendingUp
} from 'lucide-react';

/**
 * Mapa centralizado de iconos en español para el diseño Café Minimalista
 */

interface IconoProps {
  nombre: string;
  className?: string;
  tamaño?: number;
}

export const IconoDinamico: React.FC<IconoProps> = ({ nombre, className = "w-5 h-5", tamaño = 20 }) => {
  switch (nombre) {
    case 'Layers':
      return <Layers className={className} size={tamaño} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} size={tamaño} />;
    case 'Sparkles':
      return <Sparkles className={className} size={tamaño} />;
    case 'Compass':
      return <Compass className={className} size={tamaño} />;
    case 'Coffee':
      return <Coffee className={className} size={tamaño} />;
    case 'Server':
      return <Server className={className} size={tamaño} />;
    case 'Lock':
      return <Lock className={className} size={tamaño} />;
    case 'Database':
    case 'DatabaseZap':
      return <Database className={className} size={tamaño} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} size={tamaño} />;
    case 'Atom':
      return <Atom className={className} size={tamaño} />;
    case 'FileCode2':
      return <FileCode2 className={className} size={tamaño} />;
    case 'Cpu':
      return <Cpu className={className} size={tamaño} />;
    case 'Layout':
      return <Layout className={className} size={tamaño} />;
    case 'TableProperties':
      return <TableProperties className={className} size={tamaño} />;
    case 'GitBranch':
      return <GitBranch className={className} size={tamaño} />;
    case 'Box':
      return <Box className={className} size={tamaño} />;
    case 'Send':
      return <Send className={className} size={tamaño} />;
    case 'Cloud':
      return <Cloud className={className} size={tamaño} />;
    default:
      return <Code2 className={className} size={tamaño} />;
  }
};



export {
  Layers,
  ShieldCheck,
  Sparkles,
  Compass,
  Coffee,
  Server,
  Lock,
  Database,
  CheckCircle2,
  Atom,
  FileCode2,
  Cpu,
  Layout,
  TableProperties,
  GitBranch,
  Box,
  Send,
  Cloud,
  ArrowUpRight,
  ArrowRight,
  ArrowUp,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ExternalLink,
  Code2,
  Check,
  Copy,
  ChevronRight,
  Terminal,
  Play,
  ShoppingCart,
  Users,
  Vote,
  Sparkle,
  FileText,
  Menu,
  X,
  Printer,
  Plus,
  Minus,
  Trash2,
  Heart,
  Filter,
  GraduationCap,
  Globe2,
  BookOpen,
  TrendingUp
};

