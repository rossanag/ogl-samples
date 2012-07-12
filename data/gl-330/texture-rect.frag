#version 330 core

#define POSITION	0
#define COLOR		3
#define TEXCOORD	4
#define INSTANCE	7
#define FRAG_COLOR	0

uniform sampler2DRect Diffuse;

in block
{
	vec2 Texcoord;
} In;

layout(location = FRAG_COLOR, index = 0) out vec4 Color;

void main()
{
	Color = texture(Diffuse, In.Texcoord);
}