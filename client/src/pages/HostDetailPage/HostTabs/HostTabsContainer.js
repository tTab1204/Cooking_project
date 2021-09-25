import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
import HostTabsPresenter from './HostTabsPresenter';
import { REVIEW_SERVER } from 'utils/config';

function HostTabsContainer({ url, history, hostId, detail }) {
  const userId = localStorage.getItem('userId');

  const [AllReviews, setAllReviews] = useState([]);

  const pageEnd = useRef();

  const onHandleTab = key => {
    history.push(`${url}/${key}`);
  };

  const refreshFunction = newComments => {
    setAllReviews(AllReviews.concat(newComments));
  };

  const showReviews = async body => {
    let variable = {
      hostId: body,
    };

    try {
      const response = await Axios.post(
        `${REVIEW_SERVER}/show-reviews`,
        variable,
      );
      const reviews = response.data.reviews;
      setAllReviews(reviews);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showReviews(hostId);
  }, []);

  // Infinite Scroll
  // useEffect(() => {
  //   if (loading) {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         if (entries[0].isIntersecting) {
  //           console.log("entries:", entries[0].isIntersecting);
  //           num++;
  //           onLoadMore();
  //           if (num >= 5) observer.unobserve(pageEnd.current);
  //         }
  //       },
  //       { threshold: 1 }
  //     );
  //     observer.observe(pageEnd.current);
  //   }
  // }, [loading]);

  return (
    <>
      <HostTabsPresenter
        refreshFunction={refreshFunction}
        AllReviews={AllReviews}
        onHandleTab={onHandleTab}
        hostId={hostId}
        detail={detail}
        showReviews={showReviews}
        userId={userId}
        pageEnd={pageEnd}
      />
    </>
  );
}

export default HostTabsContainer;
