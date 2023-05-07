import { useState, useEffect } from 'react';
import Card from '../Card/Card';
import { CardsListContainer, LoadMore, LoadMoreContainer, BackLink, BackButton } from './CardsList.styled';

const CardsList = ({ users }) => {
    const [shownCards, setShownCards] = useState(
      Number(localStorage.getItem('shownCards')) || 3
    );
  
    useEffect(() => {
      localStorage.setItem('shownCards', shownCards);
    }, [shownCards]);
  
    const loadMore = () => {
      setShownCards(shownCards + 3);
    };
  
    return (
      <>
        <BackLink to="/">
          <BackButton>Back</BackButton>
        </BackLink>
  
        <CardsListContainer>
          {users.slice(0, shownCards).map(user => (
            <Card key={user.id} user={user} />
          ))}
          {shownCards < users.length && (
            <LoadMoreContainer>
              <LoadMore onClick={loadMore}>Load More</LoadMore>
            </LoadMoreContainer>
          )}
        </CardsListContainer>
      </>
    );
  };
  
  export default CardsList;