import React from 'react';
import { shallow, mount } from 'enzyme';
import QuestionList from '../client/src/components/QA/QuestionList.jsx';
import QuestionItem from '../client/src/components/QA/QuestionItem.jsx';
import axios from 'axios';


jest.mock('axios');

const testQuestion1 = {
  question_body: 'who?',
  question_id: 1,
  answers: {
    6: { body: 'Me!' }
  }
};

const testQuestion2 = {
  question_body: 'what?',
  question_id: 2,
  answers: {
    1: { body: 'A shirt!'},
    2: { body: 'milk' },
    3: { body: 'sorry, idk' }
  }
}

describe('<QuestionList />', () => {
  it('renders QuestionItems based on length of questions prop array', () => {
    const wrapper = shallow(<QuestionList questions={ [testQuestion1, testQuestion2] } answerLimit={2}/>);
    expect(wrapper.find(QuestionItem)).toHaveLength(2);

    wrapper.setProps({
      questions: [testQuestion1]
    });
    expect(wrapper.find(QuestionItem)).toHaveLength(1);
  });

  it('renders answers based on answerLimit prop', () => {
    const wrapper = shallow(<QuestionItem question={testQuestion2} answerLimit={2} key={testQuestion2.question_id}/>);
    expect(wrapper.find('p.answer')).toHaveLength(2);

    wrapper.setProps({
      answerLimit: 3
    });

    expect(wrapper.find('p.answer')).toHaveLength(3);
  })
})


