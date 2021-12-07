import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TaskComponent} from './task.component';
import {render} from '@testing-library/angular';
import {Pinned} from './task.stories';


describe('TaskComponent', () => {
  it('renders a task', async () => {
    const mockedActions = jest.fn();
    const task = await render(TaskComponent, {
      componentProperties: {
        ...Pinned.args,
        onPinTask: {
          emit: mockedActions,
        } as any,
        onArchiveTask: {
          emit: mockedActions,
        } as any,
      },
    });
    const component = task.fixture.componentInstance;
    expect(component.task.state).toBe('TASK_PINNED');
  });
});

