import React from 'react';
import { shallow } from 'enzyme';
import CreateArticleComponent from '../../components/Articles/CreateArticleComponent';
import EditorComponent from '../../components/Articles/EditorComponent';


describe('Renders CreateArticlesComponent correctly', () => {
  const props = {
    articles: {},
    loading: false,
    success: false,
    onArticleChange: jest.fn(),
    publish: () => {},
  };

  const wrapper = shallow(<CreateArticleComponent {...props} />);

  it('renders <EditorComponent />', () => {
    expect(wrapper.find(EditorComponent).length).toBe(1);
  });

  it('renders .container class', () => {
    expect(wrapper.find('.container').length).toBe(1);
  });

  it('test click on publish', () => {
    expect(wrapper.find('Col p').length).toEqual(1);
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onPublish');
    wrapper.instance().onPublish();
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });

  it('test update state onchange', () => {
    const handleClickSpy = jest.spyOn(wrapper.instance(), 'onArticleChange');
    const data = {};
    wrapper.instance().onArticleChange(data);
    expect(handleClickSpy.mock.calls.length).toEqual(1);
  });
});
