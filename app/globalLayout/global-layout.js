'use client'

import { useEffect, useRef, useState } from 'react';
import mixpanel from 'mixpanel-browser'

import Header from '../component/header';
import Footer from '../component/footer';

import { MIXPANEL_ID } from '../global/global';

export default function GlobalLayout({ children }) {

  const [layoutType, setLayoutType] = useState('students'); // 'students' | 'teachers'
  const [role, setRole] = useState('Student'); //Student | Teacher
  const [pageStr, setPageStr] = useState('');
  const mixpanelLoadedRef = useRef();
  const siteMap = {
    '/':' ',
    '/quicktakes-about-us':' (About us) ',
    '/faq':' (FAQ) ',
    '/try-it-now':' (Try it Now) ',

    '/about-us-teachers':' (About us) ',
    '/faq-teachers':' (FAQ) ',
    '/teachers': ' '
  }

  // init mixpanel
  useEffect(() => {
    mixpanel.init(MIXPANEL_ID, { debug: false });
  }, [])

  useEffect(() => {
    if(mixpanel?.__loaded)mixpanelLoadedRef.current = true;
  }, [mixpanel?.__loaded])

  useEffect(() => {
    const pathname = window.location.pathname;
    const type = pathname.indexOf('teachers') > -1 ? 'teachers' : 'students';
    const ROLE = pathname.indexOf('teachers') > -1 ? 'Teacher' : 'Student';
    const str = siteMap[pathname];
    setLayoutType(type);
    setRole(ROLE);
    setPageStr(str);
  }, [])

  const RenderChildren = () => {
    return (
      <>
        <Header layoutType={layoutType} role={role} pageStr={pageStr} />
        {children}
        <Footer layoutType={layoutType} />
      </>
    )

  }

  return (
    <>
      { mixpanelLoadedRef.current?RenderChildren():null}
    </>
  )
}