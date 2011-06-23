#version 330 core

#define ATTR_POSITION	0
#define ATTR_COLOR		3
#define VERT_COLOR		3
#define FRAG_COLOR		0

layout(location = VERT_COLOR) in vec4 Color;
layout(location = FRAG_COLOR, index = 0) out vec4 FragColor;

void main()
{
	FragColor = Color;
}

