import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export const LeadCapture = () =>{
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    // Mock API Call
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="bg-linear-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 p-8 rounded-3xl mt-6">
      <div className="max-w-md mx-auto text-center">
        <h3 className="text-2xl font-black text-white mb-2">Join the Community</h3>
        {/*<p className="text-slate-400 mb-6">Get weekly growth reports and productivity deep-dives.</p>*/}
        
        <form onSubmit={handleSubmit} className="relative group">
          <label htmlFor="email-address" className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-cyan-400 transition-colors"></label>
          <input 
            id="email-address"
            name="email"
            type="email" 
            required
            placeholder="Enter your email..."
            className="w-full bg-slate-900/80 border border-slate-700 rounded-2xl py-4 pl-12 pr-32 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          />
          <button 
            type="submit"
            disabled={status === 'loading'}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-2 rounded-xl transition-all flex items-center gap-2"
          >
            {status === 'loading' ? 'Syncing...' : status === 'success' ? 'Joined!' : 'Join'}
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}


