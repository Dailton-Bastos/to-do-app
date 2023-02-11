export interface Task {
  id: string;
  title: string;
  isFinished: boolean;
}

export interface FormProps {
  submitForm: (e: React.FormEvent) => void;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
  value: string;
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
