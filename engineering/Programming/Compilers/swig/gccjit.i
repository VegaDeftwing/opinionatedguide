%module gccjit

%{
#define SWIG_FILE_WITH_INIT
#include <libgccjit.h>
%}

// This tells SWIG to treat char ** as a special case
%typemap(in) char ** {
  /* Check if is a list */
  if (PyList_Check($input)) {
    int size = PyList_Size($input);
    int i = 0;
    $1 = (char **) malloc((size+1)*sizeof(char *));
    for (i = 0; i < size; i++) {
      PyObject *o = PyList_GetItem($input, i);
      if (PyString_Check(o)) {
        $1[i] = PyString_AsString(PyList_GetItem($input, i));
      } else {
        free($1);
        PyErr_SetString(PyExc_TypeError, "list must contain strings");
        SWIG_fail;
      }
    }
    $1[i] = 0;
  } else {
    PyErr_SetString(PyExc_TypeError, "not a list");
    SWIG_fail;
  }
}

// This cleans up the char ** array we malloc'd before the function call
// Copied from the SWIG documentation, so beware the license!
%typemap(freearg) char ** {
  free((char *) $1);
}

// This tells SWIG to treat gcc_jit_param ** as a special case
%typemap(in) gcc_jit_param ** {
  /* Check if is a list */
  if (PyList_Check($input)) {
    int size = PyList_Size($input);
    int i = 0;
    $1 = (gcc_jit_param **) malloc((size+1)*sizeof(gcc_jit_param *));
    for (i = 0; i < size; i++) {
      if(SWIG_ConvertPtr(PyList_GetItem($input, i), (void **)&$1[i], $descriptor(gcc_jit_param *), 0) < 0) {
        PyErr_SetString(PyExc_TypeError, "in function '$symname', expecting type gcc_jit_param");
        SWIG_fail;
      }
    }
    $1[i] = 0;
  } else {
    PyErr_SetString(PyExc_TypeError, "not a list");
    SWIG_fail;
  }
}

// This cleans up the gcc_jit_param ** array we malloc'd before the function call
// Copied from the SWIG documentation, so beware the license!
%typemap(freearg) gcc_jit_param ** {
  free((gcc_jit_param *) $1);
}

// This tells SWIG to treat gcc_jit_rvalue ** as a special case
// Derived from the SWIG documentation, so beware the license!
%typemap(in) gcc_jit_rvalue ** {
  /* Check if is a list */
  if (PyList_Check($input)) {
    int size = PyList_Size($input);
    int i = 0;
    $1 = (gcc_jit_rvalue **) malloc((size+1)*sizeof(gcc_jit_rvalue *));
    for (i = 0; i < size; i++) {
      if(SWIG_ConvertPtr(PyList_GetItem($input, i), (void **)&$1[i], $descriptor(gcc_jit_rvalue *), 0) < 0) {
        PyErr_SetString(PyExc_TypeError, "in function '$symname', expecting type gcc_jit_rvalue");
        SWIG_fail;
      }
    }
    $1[i] = 0;
  } else {
    PyErr_SetString(PyExc_TypeError, "not a list");
    SWIG_fail;
  }
}

// This cleans up the gcc_jit_rvalue ** array we malloc'd before the function call
// Derived from the SWIG documentation, so beware the license!
%typemap(freearg) gcc_jit_rvalue ** {
  free((gcc_jit_rvalue *) $1);
}


%include <libgccjit.h>
