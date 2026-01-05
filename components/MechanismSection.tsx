import React, { useEffect, useRef } from 'react';
import { Button } from './ui/Button';
import { Bot, Database, Mail, MessageSquare, Globe, User, CheckCircle2 } from 'lucide-react';
import { useFormContext } from '../context/FormContext';

const MechanismSection: React.FC = () => {
  const { openForm } = useFormContext();

  return (
    <section id="solutie" className="relative w-full py-24 bg-black flex justify-center overflow-hidden">
      
      {/* --- Blending Gradients --- */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center relative z-20">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 w-fit rounded-full bg-brand-purple/10 border border-brand-purple/20">
                <span className="flex h-1.5 w-1.5 rounded-full bg-brand-lightPurple animate-pulse"></span>
                <span className="text-brand-lightPurple text-xs font-bold tracking-widest uppercase">Arhitectura Sistemului</span>
            </div>
            
            <h2 className="text-4xl md:text-[48px] font-semibold leading-[1.1] text-white font-inter">
                Un Sistem de <br/>
                <span className="font-serif italic text-brand-lightPurple font-normal">Automatizare</span> <br/>
                Care Lucrează Pentru Tine
            </h2>

            <div className="space-y-6 text-white/70 text-base md:text-lg font-sans leading-relaxed">
                <p>
                    Construim arhitecturi digitale care elimină eroarea umană. Fluxul din dreapta este un exemplu real al unui sistem de calificare lead-uri.
                </p>
                <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                            <CheckCircle2 size={16}/>
                        </div>
                        <span className="text-white/90 font-medium">Preluare date instantă din orice sursă</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-brand-lightPurple group-hover:scale-110 transition-transform">
                            <Bot size={16}/>
                        </div>
                        <span className="text-white/90 font-medium">Decizii inteligente bazate pe AI</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                        <div className="w-8 h-8 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                            <MessageSquare size={16}/>
                        </div>
                        <span className="text-white/90 font-medium">Execuție multicanal (Email, CRM, Slack)</span>
                    </div>
                </div>
            </div>

             <div className="mt-6">
                 <Button onClick={openForm}>
                    Vreau o analiză gratuită
                 </Button>
             </div>
        </div>

        {/* Right Side: Interactive Node Editor */}
        <div className="w-full lg:w-7/12 flex justify-center items-center relative">
             <CanvasWorkflow />
        </div>

      </div>
    </section>
  );
};

// ... [Rest of the Canvas Logic is unchanged, just resizing logic in NodeUI below] ...
// --- CONFIGURATION ---
const NODES = [
  // Input
  { id: 'trigger', label: 'New Lead', icon: User, x: 0.15, y: 0.5, color: '#3b82f6' },
  // Process
  { id: 'enrich', label: 'Enrich Data', icon: Globe, x: 0.40, y: 0.5, color: '#8b5cf6' },
  // AI Core
  { id: 'ai', label: 'AI Agent', icon: Bot, x: 0.65, y: 0.5, color: '#06b6d4' },
  // Outputs
  { id: 'crm', label: 'Update CRM', icon: Database, x: 0.90, y: 0.2, color: '#10b981' },
  { id: 'slack', label: 'Notify Team', icon: MessageSquare, x: 0.90, y: 0.5, color: '#10b981' },
  { id: 'email', label: 'Send Email', icon: Mail, x: 0.90, y: 0.8, color: '#10b981' },
];

const CONNECTIONS = [
  { from: 'trigger', to: 'enrich' },
  { from: 'enrich', to: 'ai' },
  { from: 'ai', to: 'crm' },
  { from: 'ai', to: 'slack' },
  { from: 'ai', to: 'email' },
];

const CanvasWorkflow: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let particles: { 
            fromId: string,
            toId: string, 
            progress: number, 
            speed: number,
            color: string,
            trail: {x: number, y: number}[]
        }[] = [];

        const resize = () => {
            const { width, height } = container.getBoundingClientRect();
            const dpr = window.devicePixelRatio || 1;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.scale(dpr, dpr);
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        };
        resize();
        window.addEventListener('resize', resize);

        const getNodePoint = (nodeId: string, side: 'left' | 'right') => {
             const { width, height } = container.getBoundingClientRect();
             const node = NODES.find(n => n.id === nodeId);
             if(!node) return {x:0, y:0};

             const centerX = width * node.x;
             const centerY = height * node.y;
             
             // Dynamic radius calculation based on width (Mobile vs Desktop)
             // Mobile node is w-14 (56px) -> radius ~28
             // Desktop node is w-20 (80px) -> radius ~40
             const isMobile = width < 500;
             const boxHalfSize = isMobile ? 28 : 40;
             const offset = 1; 

             return {
                 x: side === 'left' ? centerX - boxHalfSize - offset : centerX + boxHalfSize + offset,
                 y: centerY
             };
        };

        const spawnParticles = () => {
             particles.push({ 
                 fromId: 'trigger',
                 toId: 'enrich',
                 progress: 0, 
                 speed: 0.008,
                 color: '#3b82f6',
                 trail: []
             });
        };

        const drawConnection = (x1: number, y1: number, x2: number, y2: number, color: string) => {
            ctx.beginPath();
            if (Math.abs(y1 - y2) < 2) {
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                return { isStraight: true, p1: {x:x1, y:y1}, p2: {x:x2, y:y2} };
            } else {
                const handleLength = (x2 - x1) * 0.5;
                const cp1x = x1 + handleLength;
                const cp1y = y1;
                const cp2x = x2 - handleLength;
                const cp2y = y2;
                ctx.moveTo(x1, y1);
                ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 1.5;
                ctx.stroke();
                return { isStraight: false, cp1: {x:cp1x, y:cp1y}, cp2: {x:cp2x, y:cp2y} };
            }
        };

        const getPathPoint = (t: number, start: any, end: any, meta: any) => {
            if (meta.isStraight) {
                return { x: start.x + (end.x - start.x) * t, y: start.y + (end.y - start.y) * t };
            } else {
                const oneMinusT = 1 - t;
                const x = Math.pow(oneMinusT, 3) * start.x + 3 * Math.pow(oneMinusT, 2) * t * meta.cp1.x + 3 * oneMinusT * Math.pow(t, 2) * meta.cp2.x + Math.pow(t, 3) * end.x;
                const y = Math.pow(oneMinusT, 3) * start.y + 3 * Math.pow(oneMinusT, 2) * t * meta.cp1.y + 3 * oneMinusT * Math.pow(t, 2) * meta.cp2.y + Math.pow(t, 3) * end.y;
                return { x, y };
            }
        };

        let lastSpawn = 0;
        const render = (time: number) => {
            const { width, height } = container.getBoundingClientRect();
            ctx.clearRect(0, 0, width, height);

            const connectionPaths = new Map();
            CONNECTIONS.forEach(conn => {
                const start = getNodePoint(conn.from, 'right');
                const end = getNodePoint(conn.to, 'left');
                const pathMeta = drawConnection(start.x, start.y, end.x, end.y, '#333');
                connectionPaths.set(`${conn.from}-${conn.to}`, pathMeta);
            });

            if (time - lastSpawn > 2000) {
                spawnParticles();
                lastSpawn = time;
            }

            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.progress += p.speed;
                const start = getNodePoint(p.fromId, 'right');
                const end = getNodePoint(p.toId, 'left');
                const pathMeta = connectionPaths.get(`${p.fromId}-${p.toId}`);
                if (!pathMeta) continue;
                const currentPos = getPathPoint(p.progress, start, end, pathMeta);
                
                p.trail.push(currentPos);
                if (p.trail.length > 20) p.trail.shift();

                if (p.trail.length > 1) {
                    ctx.beginPath();
                    ctx.moveTo(p.trail[0].x, p.trail[0].y);
                    for(let j=1; j<p.trail.length; j++) { ctx.lineTo(p.trail[j].x, p.trail[j].y); }
                    const grad = ctx.createLinearGradient(p.trail[0].x, p.trail[0].y, currentPos.x, currentPos.y);
                    grad.addColorStop(0, 'rgba(0,0,0,0)');
                    grad.addColorStop(1, p.color);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 2;
                    ctx.lineCap = 'round';
                    ctx.shadowBlur = 6;
                    ctx.shadowColor = p.color;
                    ctx.stroke();
                    ctx.shadowBlur = 0;
                }

                ctx.beginPath();
                ctx.arc(currentPos.x, currentPos.y, 2.5, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.fill();

                if (p.progress >= 1) {
                    particles.splice(i, 1);
                    const nextConns = CONNECTIONS.filter(c => c.from === p.toId);
                    nextConns.forEach(conn => {
                         const targetNode = NODES.find(n => n.id === conn.to);
                         if (targetNode) {
                            particles.push({ fromId: p.toId, toId: conn.to, progress: 0, speed: 0.010, color: targetNode.color, trail: [] });
                         }
                    });
                }
            }
            animationFrameId = requestAnimationFrame(render);
        };
        animationFrameId = requestAnimationFrame(render);
        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-[600px] md:h-[650px] bg-[#09090b] border border-[#27272a] rounded-[20px] shadow-2xl flex flex-col overflow-hidden ring-1 ring-white/5">
            {/* Header */}
             <div className="h-10 border-b border-white/5 bg-[#121214] flex items-center justify-between px-4 z-20 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27272a]"></div>
                </div>
                <div className="flex items-center gap-2">
                     <span className="text-[10px] font-mono text-emerald-500/50 tracking-wide uppercase">● System Active</span>
                </div>
            </div>

            <div className="relative w-full h-full">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                <canvas ref={canvasRef} className="absolute inset-0 z-10 pointer-events-none block" />
                {NODES.map((node) => (
                    <div key={node.id} className="absolute transform -translate-x-1/2 -translate-y-1/2 z-20" style={{ left: `${node.x * 100}%`, top: `${node.y * 100}%` }}>
                        <NodeUI node={node} />
                    </div>
                ))}
            </div>
        </div>
    );
};

const NodeUI: React.FC<{ node: any }> = ({ node }) => {
    return (
        // Responsive Wrapper Size: w-14 (56px) mobile, w-20 (80px) desktop
        <div className="relative w-14 h-14 md:w-20 md:h-20 group">
             {/* Glow Effect behind node */}
            <div className="absolute inset-0 blur-xl md:blur-2xl rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500" style={{ backgroundColor: node.color }} />
            
            {/* The Node Box */}
            <div className={`
                    relative flex items-center justify-center
                    w-full h-full rounded-[14px] md:rounded-[20px]
                    bg-[#09090b] border border-white/10
                    shadow-[0_0_0_1px_rgba(255,255,255,0.03)]
                    transition-all duration-300 z-10
                    group-hover:border-white/20
                    group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]
                `}
                style={{ borderImageSource: `linear-gradient(135deg, rgba(255,255,255,0.1), ${node.color}33)` }}
            >
                {/* Inner Icon - Responsive Size */}
                <node.icon 
                    className="relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 w-5 h-5 md:w-7 md:h-7"
                    color={node.color}
                    strokeWidth={1.5}
                />

                {/* Connection Dots (Ports) */}
                {node.id !== 'trigger' && (
                    <div className="absolute -left-[4px] md:-left-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#27272a] rounded-full border border-black ring-1 ring-white/10 group-hover:bg-white transition-colors"></div>
                )}
                {['crm', 'slack', 'email'].indexOf(node.id) === -1 && (
                    <div className="absolute -right-[4px] md:-right-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 bg-[#27272a] rounded-full border border-black ring-1 ring-white/10 group-hover:bg-white transition-colors"></div>
                )}
                
                {/* Corner Accents */}
                <div className="absolute top-1 left-1 md:top-1.5 md:left-1.5 w-1 md:w-1.5 h-1 md:h-1.5 border-l border-t border-white/20 rounded-tl-[3px] md:rounded-tl-[4px] opacity-50"></div>
                <div className="absolute top-1 right-1 md:top-1.5 md:right-1.5 w-1 md:w-1.5 h-1 md:h-1.5 border-r border-t border-white/20 rounded-tr-[3px] md:rounded-tr-[4px] opacity-50"></div>
                <div className="absolute bottom-1 left-1 md:bottom-1.5 md:left-1.5 w-1 md:w-1.5 h-1 md:h-1.5 border-l border-b border-white/20 rounded-bl-[3px] md:rounded-bl-[4px] opacity-50"></div>
                <div className="absolute bottom-1 right-1 md:bottom-1.5 md:right-1.5 w-1 md:w-1.5 h-1 md:h-1.5 border-r border-b border-white/20 rounded-br-[3px] md:rounded-br-[4px] opacity-50"></div>
            </div>

            {/* Label */}
            <div className="absolute top-[115%] left-1/2 -translate-x-1/2 flex justify-center w-max z-30">
                <div className={`
                    bg-[#09090b] border border-white/10 px-2 py-1 md:px-3 md:py-1.5 rounded-md md:rounded-lg
                    text-[9px] md:text-[11px] font-mono font-medium uppercase tracking-widest text-white
                    whitespace-nowrap backdrop-blur-md shadow-xl
                    transition-all duration-300 group-hover:scale-105 group-hover:border-white/20
                `}>
                    {node.label}
                </div>
            </div>
        </div>
    )
}

export default MechanismSection;