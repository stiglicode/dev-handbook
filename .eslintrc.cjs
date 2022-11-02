module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:testing-library/react'
  ],
  'overrides': [{
    // 3) Now we enable eslint-plugin-testing-library rules or preset only for matching testing files!
    'files': ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
    'extends': ['plugin:testing-library/react']
  }],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'testing-library'
  ],
  'rules': {
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'no-self-compare': 0,
    'no-template-curly-in-string': 2,
    'no-unreachable-loop': 2,
    'no-unused-private-class-members': 2,
    'no-use-before-define': 2,
    'accessor-pairs': 1,
    'default-case': 2,
    'no-empty-function': 2,
    'no-eq-null': 2,
    'no-eval': 2,
    'no-extra-bind': 2,
    'no-multi-str': 2,
    'no-new': 2,
    'no-useless-return': 2,
    'prefer-template': 2,
    'require-await': 2,
    'no-multiple-empty-lines': 2,
    'no-multi-spaces': 2,
    'switch-colon-spacing': 2,
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1 
      }
    ],
    'semi': [2, 'always'],
    'object-curly-spacing': [2, 'always'],
    'quotes': [
      2,
      'single',
      'avoid-escape'
    ],
    'camelcase': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': [2, {
      'props': false 
    }],
    'no-lonely-if': 0,
    'arrow-parens': [
      2,
      'as-needed',
      {
        'requireForBlockBody': true 
      }
    ],
    '@typescript-eslint/member-delimiter-style': [1, {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': true
      },
      'singleline': {
        'delimiter': 'comma',
        'requireLast': false
      }
    }],
    'no-unused-vars': 0,
    'space-before-blocks': [2, 'always'],
    'keyword-spacing': [2, {
      'before': true 
    }],
    'object-property-newline': [2, {
      'allowAllPropertiesOnSameLine': false 
    }],
    'object-curly-newline': [2, {
      'ObjectExpression': {
        'multiline': true,
        'minProperties': 1
      }
    }],
    
    'array-element-newline': [2, {
      'minItems': 3 
    }],
    'array-bracket-newline': [2, {
      'minItems': 3 
    }],
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    'padding-line-between-statements': [
      2,
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'return'
      },
      {
        'blankLine': 'always',
        'prev': 'if',
        'next': '*'
      },
      {
        'blankLine': 'always',
        'prev': '*',
        'next': 'break'
      }
    ],
    'func-style': [
      2,
      'declaration',
      {
        'allowArrowFunctions': true 
      }
    ],
    'prefer-destructuring': [2, {
      'object': true 
    }],
    'comma-dangle': [2, 'never'],
    'dot-location': [2, 'property'],
    'multiline-ternary': [2, 'always'],
    'space-before-function-paren': [2, 'never'],
    'jsx-quotes': [2, 'prefer-double'],
    'implicit-arrow-linebreak': [2, 'beside'],
    'brace-style': [
      2,
      '1tbs',
      {
        'allowSingleLine': true 
      }
    ],
    'block-spacing': [2, 'always'],
    'no-duplicate-imports': [2, {
      'includeExports': true 
    }],
    'linebreak-style': [2, 'unix']
  }
};