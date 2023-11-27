import Link from "next/link";

export default function TaskList() {
    return (
        <main className="">
            <h1 className="bg-black text-white p-10 text-[40px]">
                CodeCamp Task Lists
            </h1>
            <ul className="p-40">
                <li className="p-3">
                    <Link
                        href="tasks/task-1/"
                        className="hover:text-blue-500 transition p-2"
                    >
                        &#10095; Task - 1 : Book Component
                    </Link>
                </li>
                <li className="p-3">
                    <Link
                        href="tasks/task-2/"
                        className="hover:text-blue-500 transition p-2"
                    >
                        &#10095; Task - 2 : card Component
                    </Link>
                </li>
                <li className="p-3">
                    <Link
                        href="tasks/task-3/"
                        className="hover:text-blue-500 transition p-2"
                    >
                        &#10095; Task - 3 : Form Component
                    </Link>
                </li>
                <li className="p-3">
                    <Link
                        href="tasks/task-4/"
                        className="hover:text-blue-500 transition p-2"
                    >
                        &#10095; Task - 4 : Count Component
                    </Link>
                </li>
            </ul>
        </main>
    );
}
