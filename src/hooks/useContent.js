import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const useContent = (target) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    getDocs(collection(getFirestore(), target))
      .then((snapshot) => {
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));

        setContent(allContent);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error.message);
      });
  }, [target]);

  return { data: content };
};

export default useContent;
