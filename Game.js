import React, {Component} from 'react';

import Card from './Card';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cards: [
            {
             name: "card1",
             value: 1,
             isFlipped: false,
             isMatched: false,
            },
            {
                name: "card2",
                value: 1,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card3",
                value: 2,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card4",
                value: 2,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card5",
                value: 3,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card6",
                value: 3,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card6",
                value: 3,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card7",
                value: 4,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card8",
                value: 4,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card9",
                value: 5,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card10",
                value: 5,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card11",
                value: 6,
                isFlipped: false,
                isMatched: false,
               },
               {
                name: "card12",
                value: 6,
                isFlipped: false,
                isMatched: false,
               }
            
        ]
    }
  }
}