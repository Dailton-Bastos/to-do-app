export interface Task {
  id: string;
  title: string;
  isFinished: boolean;
}

export interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface TasksProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface ListProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export interface InfoProps {
  totalCounter: number;
  totalDone: number;
}
