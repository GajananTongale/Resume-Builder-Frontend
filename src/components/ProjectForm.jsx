import React from "react";
import { FolderKanban, Plus, Trash2 } from "lucide-react";

const ProjectForm = ({ data, onChange }) => {

    const addProject = () => {
        const newProject = {
            name: "",
            type: "",
            description: ""
        };
        onChange([...data, newProject]);
    };

    const removeProject = (index) => {
        const updated = data.filter((_, i) => i !== index);
        onChange(updated);
    };

    const updateProject = (index, field, value) => {
        const updated = [...data];
        updated[index] = {
            ...updated[index],
            [field]: value
        };
        onChange(updated);
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <FolderKanban className="size-5" />
                        Projects
                    </h3>
                    <p className="text-sm text-gray-500">
                        Add your projects and work details
                    </p>
                </div>

                <button
                    onClick={addProject}
                    className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors">
                    <Plus className="size-4" />
                    Add Project
                </button>
            </div>
                <div className="space-y-4 mt-6">
                    {data.map((project, index) => (
                        <div
                            key={index}
                            className="p-4 border border-gray-200 rounded-lg space-y-3">
                            <div className="flex justify-between items-center">
                                <h4 className="font-medium">
                                    Project #{index + 1}
                                </h4>
                                <button
                                    onClick={() => removeProject(index)}
                                    className="text-red-500 hover:text-red-700 transition-colors">
                                    <Trash2 className="size-4" />
                                </button>
                            </div>

                            <div className="grid gap-3">
                                <input
                                    type="text"
                                    placeholder="Project Name"
                                    value={project.name}
                                    onChange={(e) =>
                                        updateProject(
                                            index,
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    className="px-3 py-2 text-sm rounded-lg"/>

                                <input
                                    type="text"
                                    placeholder="Project Type"
                                    value={project.type}
                                    onChange={(e) =>
                                        updateProject(
                                            index,
                                            "type",
                                            e.target.value
                                        )
                                    }
                                    className="px-3 py-2 text-sm rounded-lg"/>
                            </div>
                            <textarea
                                rows={4}
                                placeholder="Describe your project..."
                                value={project.description}
                                onChange={(e) =>
                                    updateProject(
                                        index,
                                        "description",
                                        e.target.value
                                    )
                                }
                                className="w-full px-3 py-2 text-sm rounded-lg resize-none"/>
                        </div>
                    ))}
                </div>

        </div>
    );
};

export default ProjectForm;
