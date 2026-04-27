
import { SkillWidget } from './components/skillWidget';
import { HabitWidget } from './components/habitWidget';
import { GrowthChart } from './components/growthChart';
import { LeadCapture } from './components/leadCapture';
import { motion, type Variants } from 'framer-motion';

import './App.css';

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, 
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, type: "tween", ease: "easeOut" }
  })
};

function App() {
  

  return (
    <>
     <div className='min-h-screen bg-slate-900 text-white p-4 md:p-12'>
      <header className='max-w-6xl mx-auto mb-10 flex items-center justify-between'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl w-full'>
          <h1 className='text-5xl font-extrabold text-amber-500 text-center md:text-left leading-none'>
            ACTIVITY-TRACKER <br/> 
            <span className='text-gray-400 font-normal mt-2 text-lg ml-1'>Visually Tracking my Activity Progress</span>
          </h1>
            <LeadCapture />
          
        </div>
      </header>

      <main className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 lg:grid-cols-3 gap-6'>
        {/*Growthchart*/}
        <div className='md:col-span-8'>
          <motion.div 
            custom={1} 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants as Variants} 
            className="md:col-span-8">
            <GrowthChart/>
          </motion.div>
        </div>

        {/*Habitwidget*/}
        <div className='md:col-span-4'>
          <HabitWidget />
        </div>

        {/*skillwidget*/}
        <div className='md:col-span-12'>
          <SkillWidget />
        </div> 
      </main>
     </div>
    </>
  )
}

export default App
