import Banner from '@/sections/banner'
import dynamic from 'next/dynamic'

const DynamicExpertise = dynamic(() => import('@/sections/expertise'))
const DynamicAboutMe = dynamic(() => import('@/sections/aboutme'))
const DynamicTimeline = dynamic(() => import('@/sections/timelines'))
const DynamicContact = dynamic(() => import('@/sections/contact'))
const Timezones = dynamic(() => import('@/components/timezones'), {
  ssr: false,
}); // fix server client time mismatch

export default function Home() {
  return (
    <>
      <Timezones />
      <Banner />
      <DynamicExpertise />
      <DynamicAboutMe />
      <DynamicTimeline />
      <DynamicContact />
    </>
  );
}
