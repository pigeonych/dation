import React, { FC, useState } from "react";
import { ColumnsType } from "antd/es/table";
import { Col, Row, Table, Popover, Button, Tag } from "antd";
import {
  ArrowPathIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  TrashIcon,
} from "@heroicons/react/20/solid";
import { MenuOutlined } from "@ant-design/icons";
import type { DragEndEvent } from "@dnd-kit/core";
import { DndContext } from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  "data-row-key": string;
}
interface DataType {
  key: string;
  name: string;
  status: string;
  role: string;
  tel: string;
  action?: () => void;
}

const data: DataType[] = [
  {
    key: "1",
    name: "Иван Иванов1",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "2",
    name: "Иван Иванов2",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
  {
    key: "3",
    name: "Иван Иванов3",
    status: "Активен",
    role: "Мастер",
    tel: "+998908886633",
  },
];

const Rows = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props["data-row-key"],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: "relative", zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === "sort") {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: "none", cursor: "move" }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const columns: ColumnsType<DataType> = [
  {
    title: "ПОРЯДОК",
    key: "sort",
  },
  {
    title: "ИМЯ",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "СТАТУС",
    dataIndex: "status",
    key: "status",
    render: (val) => {
      return (
        <div
          className={`inline-flex justify-between items-center rounded-2xl p-1 px-5 gap-x-3 bg-green-100`}
          key={val}
        >
          <div className={`text-xs font-medium text-green-800`}>{val}</div>
        </div>
      );
    },
  },
  {
    title: "РОЛЬ",
    dataIndex: "role",
    key: "role",
  },

  {
    title: "ТЕЛЕФОН",
    dataIndex: "tel",
    key: "tel",
  },
  {
    title: "",
    key: "action",
    dataIndex: "action",
    render: () => {
      return (
        <div className="flex flex-1 gap-x-5 justify-center">
          <Popover
            style={{ padding: 0 }}
            content={
              <div className="flex flex-col w-full">
                <Button
                  icon={<ArrowPathIcon className={"w-4 h-4"} />}
                  type={"default"}
                  className="flex w-full text-left border-none items-center shadow-none"
                >
                  Сбросить пароль
                </Button>
                <Button
                  icon={<TrashIcon className={"w-4 h-4 text-red-300"} />}
                  type={"default"}
                  className="flex w-full text-left border-none items-center shadow-none"
                >
                  Удалить
                </Button>
              </div>
            }
          >
            <EllipsisVerticalIcon className={"w-6 h-6 shrink-0"} />
          </Popover>
          <ChevronRightIcon className="w-6 h-6" onClick={() => {}} />
        </div>
      );
    },
  },
];

const Performers: FC<{}> = () => {
  const [dataSource, setDataSource] = useState(data);

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setDataSource((previous) => {
        const activeIndex = previous.findIndex((i) => i.key === active.id);
        const overIndex = previous.findIndex((i) => i.key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };
  return (
    <Row className="isolate w-full h-full overflow-auto">
      <Row className="flex flex-col gap-y-3 pt-3 px-5 w-full h-full">
        <Col className="rounded-lg w-full overflow-hidden flex flex-col items-start bg-white justify-start">
          <DndContext
            modifiers={[restrictToVerticalAxis]}
            onDragEnd={onDragEnd}
          >
            <SortableContext
              // rowKey array
              items={dataSource.map((i) => i.key)}
              strategy={verticalListSortingStrategy}
            >
              <Table
                components={{
                  body: {
                    row: Rows,
                  },
                }}
                rowKey="key"
                columns={columns}
                dataSource={dataSource}
                className="w-full"
                pagination={{
                  responsive: true,
                  style: {
                    marginRight: 10,
                    display: "flex",
                    alignItems: "center",
                  },
                  hideOnSinglePage: true,
                  showTotal: (total, range) => {
                    return (
                      <div className="justify-self-start">
                        <span>
                          <span className={"font-semibold"}>{range[0]}-</span>
                          <span className={"font-semibold"}>
                            {range[1]}
                          </span> из{" "}
                          <span className={"font-semibold"}>{total}</span>{" "}
                          результатов
                        </span>
                      </div>
                    );
                  },
                }}
              />
            </SortableContext>
          </DndContext>
        </Col>
      </Row>
    </Row>
  );
};

export default Performers;
