import { RichTextBody } from './or-rich-text.types'

export const fakeBody: RichTextBody = {
  content: [],
}

export const simpleBody: RichTextBody = {
  content: [
    {
      type: 'h1',
      data: {},
      content: [{ type: 'text', text: 'Test Heading', marks: [], data: {} }],
    },
    {
      type: 'paragraph',
      data: {},
      content: [{ type: 'text', text: 'Test Text', marks: [], data: {} }],
    },
  ],
}

export const listBody: RichTextBody = {
  content: [
    {
      type: 'unordered-list',
      data: {},
      content: [
        {
          type: 'list-item',
          data: {},
          content: [{ type: 'text', text: 'item 1', marks: [], data: {} }],
        },
        {
          type: 'list-item',
          data: {},
          content: [{ type: 'text', text: 'item 2', marks: [], data: {} }],
        },
      ],
    },
  ],
}

export const imageBody: RichTextBody = {
  content: [
    {
      type: 'image',
      data: {
        src: 'https://via.placeholder.com/300x200',
        title: 'image',
      },
    },
  ],
}
