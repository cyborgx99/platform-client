export const pathKeys = {
  unathorized: {
    HOME: '/',
    LOGIN: '/login',
    SIGN_UP: '/sign-up',
  },
  password: {
    FORGOT_PASSWORD: '/forgot-password',
    SET_NEW_PASSWORD: '/set-password',
  },
  user: {
    DASHBOARD: '/dashboard',
  },
  teacher: {
    DASHBOARD: '/dashboard',
    CREATE_LESSON: '/create-lesson',
  },
  tabs: {
    DASHBOARD_STUDENT_TABS: {
      CLASSROOM: '/dashboard/classroom',
      HOMEWORK: '/dashboard/homework',
      PAYMENT: '/dashboard/payment',
    },
    DASHBOARD_TEACHER_TABS: {
      USER: '/dashboard/user',
      LESSON: '/dashboard/lesson',
      CLASSROOM: '/dashboard/classroom',
    },
    CREATE_LESSON_TABS: {
      IMAGE: '/create-lesson/image',
      CONTENT: '/create-lesson/content',
      LESSON: '/create-lesson/lesson',
    },
  },
};
