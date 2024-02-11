export const data = [
    {
      name: 'Programming Languages',
      children: [
        {
          name: 'JavaScript',
          description: 'A versatile scripting language often used for web development.',
          children: [
            {
              name: 'Node.js',
              description: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, used for server-side programming.'
            },
            {
              name: 'React',
              description: 'A JavaScript library for building user interfaces, particularly single-page applications.',
              children: [
                {
                  name: 'Redux',
                  description: 'A predictable state container for JavaScript apps.'
                },
                {
                  name: 'React Router',
                  description: 'A routing library for React applications.'
                }
              ]
            }
          ]
        },
        {
          name: 'Python',
          description: 'A high-level programming language known for its simplicity and readability.'
        },
        {
          name: 'Java',
          description: 'A widely-used object-oriented programming language, particularly for enterprise applications.'
        }
      ]
    },
    {
      name: 'Web Development',
      children: [
        {
          name: 'HTML',
          description: 'Hypertext Markup Language, the standard markup language for creating web pages.'
        },
        {
          name: 'CSS',
          description: 'Cascading Style Sheets, used for styling HTML elements on web pages.'
        }
      ]
    },
    {
      name: 'Data Structures',
      children: [
        {
          name: 'Arrays',
          description: 'A collection of elements stored at contiguous memory locations.'
        },
        {
          name: 'Linked Lists',
          description: 'A data structure consisting of a sequence of elements, where each element points to the next element.'
        },
        {
          name: 'Trees',
          description: 'A hierarchical data structure consisting of nodes, with a root node and zero or more child nodes.',
          children: [
            {
              name: 'Binary Trees',
              description: 'A tree data structure in which each node has at most two children.'
            },
            {
              name: 'Balanced Trees',
              description: 'A type of tree data structure in which the height of the left and right subtrees of any node differ by no more than one.'
            }
          ]
        }
      ]
    }
  ];
  